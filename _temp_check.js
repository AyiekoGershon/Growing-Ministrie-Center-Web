document.getElementById('currentYear').textContent = new Date().getFullYear();

(function() {
    'use strict';

    var songs = [
        { id: 'kSzjYRZm46E', title: 'Wazazi Wangu', num: 1, icon: 'fa-home' },
        { id: 'pQQDDMDtmZg', title: 'Ameiso Ge Enokwe', num: 2, icon: 'fa-eye' },
        { id: 'H9o35Mp2Gw0', title: 'Maamuzi Yako', num: 3, icon: 'fa-heart' },
        { id: '9CIsCAu8P1g', title: 'Tenda Wema', num: 4, icon: 'fa-hand-holding-heart' },
        { id: 'gxmG9v_Tyhw', title: 'Jina La Yesu', num: 5, icon: 'fa-cross' },
        { id: 'o5WpWhAhUrA', title: 'Dunia Yazunguka', num: 6, icon: 'fa-globe' }
    ];

    var nowPlayingText = document.getElementById('nowPlayingText');
    var playlistItems = document.getElementById('playlistItems');
    var songsGrid = document.getElementById('songsGrid');
    var playlistToggle = document.getElementById('playlistToggle');
    var playlistChevron = document.getElementById('playlistChevron');
    var currentIndex = 0;
    var player = null;
    var playerReady = false;

    // Load YouTube IFrame API
    var tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = function() {
        player = new YT.Player('youtube-player', {
            height: '100%',
            width: '100%',
            videoId: songs[0].id,
            playerVars: {
                'rel': 0,
                'modestbranding': 1,
                'playsinline': 1
            },
            events: {
                'onReady': function() {
                    playerReady = true;
                },
                'onStateChange': function(e) {
                    if (e.data === YT.PlayerState.ENDED) {
                        setTimeout(function() { loadSong(currentIndex + 1); }, 1000);
                    }
                },
                'onError': function(event) {
                    console.log('YouTube error:', event.data);
                }
            }
        });
    };

    function loadSong(index) {
        if (index < 0) index = songs.length - 1;
        if (index >= songs.length) index = 0;
        currentIndex = index;

        var song = songs[currentIndex];
        if (player && playerReady) {
            player.loadVideoById(song.id);
        }

        nowPlayingText.textContent = song.title;

        var items = document.querySelectorAll('.playlist-item');
        for (var i = 0; i < items.length; i++) {
            items[i].classList.toggle('active', i === currentIndex);
        }

        var cards = document.querySelectorAll('.choir-song-card');
        for (var j = 0; j < cards.length; j++) {
            cards[j].style.borderColor = j === currentIndex ? 'rgba(212, 168, 85, 0.5)' : 'rgba(212, 168, 85, 0.15)';
        }
    }

    function buildPlaylist() {
        for (var i = 0; i < songs.length; i++) {
            var song = songs[i];
            var item = document.createElement('div');
            item.className = 'playlist-item' + (i === 0 ? ' active' : '');
            item.innerHTML = '<div class="playlist-thumb"><i class="fas ' + song.icon + '"></i></div><div class="playlist-info"><h4>' + song.title + '</h4><p>Sunday Sch. Mabera (GMC)</p></div><div class="playlist-playing-indicator"><span></span><span></span><span></span></div>';
            item.addEventListener('click', function(idx) {
                return function() { loadSong(idx); };
            }(i));
            playlistItems.appendChild(item);
        }
    }

    function buildSongsGrid() {
        for (var i = 0; i < songs.length; i++) {
            var song = songs[i];
            var card = document.createElement('div');
            card.className = 'choir-song-card';
            card.innerHTML = '<div class="song-num">Song ' + song.num + '</div><h4>' + song.title + '</h4><p>Sunday Sch. Mabera (GMC)</p><div class="play-icon"><i class="fas fa-play-circle"></i> Click to play</div>';
            card.addEventListener('click', function(idx) {
                return function() {
                    loadSong(idx);
                    document.getElementById('player').scrollIntoView({ behavior: 'smooth' });
                };
            }(i));
            songsGrid.appendChild(card);
        }
    }

    var playlistOpen = true;
    playlistToggle.addEventListener('click', function() {
        playlistOpen = !playlistOpen;
        playlistItems.classList.toggle('open', playlistOpen);
        playlistChevron.classList.toggle('rotated', playlistOpen);
    });

    buildPlaylist();
    buildSongsGrid();
    nowPlayingText.textContent = songs[0].title;
})();
