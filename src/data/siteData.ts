import type { Ministry, Branch, ServiceSchedule } from '../types'

export const CHURCH_NAME = 'Growing Missionaries Centre'
export const CHURCH_TAGLINE = 'Rescue. Recover. Restore.'
export const CHURCH_MOTTO = 'With one hand toward God and the other toward people'

export const CONTACT = {
  phone: ['+254 727 982 178', '+254 721 352 698', '+254 724 874 469'],
  email: 'growingmissionaries32@gmail.com',
  address: 'P.O. Box 4-40414, Isebania, Kenya, East Africa',
  maps: 'https://maps.app.goo.gl/HUYZRL6RkqP261528',
}

export const SOCIALS = {
  facebook: '#',
  youtube: 'https://www.youtube.com/@vineworshipministry',
  youtubeChoir: 'https://youtube.com/@sayuniharvestchoir7814',
  instagram: '#',
}

export const GIVING = {
  bank: { name: 'Co-operative Bank of Kenya', account: '01101512307001', branch: 'Kehancha Branch' },
  mpesa: { paybill: '400200', account: '897707' },
}

export const SERVICES: ServiceSchedule[] = [
  { day: 'Monday', name: 'Fellowship', time: '3:00 PM - 4:00 PM' },
  { day: 'Tuesday', name: 'Fellowship', time: '2:30 PM - 4:00 PM' },
  { day: 'Wednesday', name: 'Fellowship', time: '4:00 PM - 5:00 PM' },
  { day: 'Thursday', name: 'Prayer Meeting', time: '8:00 PM - 6:00 AM' },
  { day: 'Friday', name: 'Prayer Meeting', time: '8:00 PM - 6:00 AM' },
  { day: 'Saturday', name: 'Choir Practice & Praise Worship', time: '2:00 PM - 4:00 PM | 4:00 PM - 5:00 PM' },
  { day: 'Sunday', name: 'First & Second Service', time: '9:00 AM' },
]

export const OBJECTIVES = [
  'Raising an altar to build missionaries to impact the nations of the world.',
  'Shaping servants for strategic global impact and revival through Spirit-empowered ministry of the Word of God.',
  'Providing and equipping widows, orphans and children at risk with food, clothes, shelter, education and family care.',
  'Overseeing missionary works, publications and correspondences with area missionary associations.',
  'Establishing suitable relationships with stakeholders, government and NGOs to promote the value of human life.',
  'Networking believers from individuals to churches and ministry groups while encouraging prayer, evangelism and missions.',
  'Training members to discover their spiritual gifts, establishing worship centers, and preparing the body of Christ for His second coming.',
  'Seeking God\'s intervention on matters pertaining to our lives as per His plans revealed by the Word of God.',
]

export const MINISTRIES: Ministry[] = [
  {
    id: 'children',
    name: 'Children\'s Ministry',
    subtitle: 'Nurturing Young Hearts in Faith',
    description: 'Our Children\'s Ministry is dedicated to creating a safe, loving, and engaging environment where young believers can discover God\'s love, learn biblical truths, and develop a strong foundation of faith.',
    vision: 'We believe children are precious gifts from God. Our vision is to teach them the way of the Lord so that even when they are old, they will not turn away from His truth.',
    verse: 'Let the little children come to me... for the kingdom of heaven belongs to such as these.',
    ref: 'Matthew 19:14',
    activities: [
      'Bible Stories & Lessons - Interactive teachings through stories, songs, and activities',
      'Community & Fellowship - A welcoming space for friendships and church family warmth',
      'Character Development - Teaching honesty, kindness, respect, and service',
      'Creative Expression - Songs, drama, art, and games for faith engagement',
      'Prayer & Worship - Leading children in worship and personal prayer',
      'Special Events & Outreach - Seasonal celebrations, mission trips, and service projects',
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/A_Sunday_school_children.jpg',
    videoUrl: 'https://res.cloudinary.com/dri60cqs8/video/upload/v1780821241/Children_Ministry_h0waat.mp4',
  },
  {
    id: 'sunday-school',
    name: 'Sunday School Choir',
    subtitle: 'Children Lifting Their Voices in Praise',
    description: 'Our Sunday School Choir ministry teaches children the joy of worship through song. We nurture young talents and create a foundation of praise that will last a lifetime.',
    vision: 'We envision a generation of children who worship God with passion and joy, using their voices and talents to lead others into His presence.',
    verse: 'Let the children come to me... for the kingdom of heaven belongs to such as these.',
    ref: 'Matthew 19:14',
    activities: [
      'Choir Rehearsals - Weekly practices teaching children worship songs and harmonies',
      'Sunday Worship Leading - Children leading the congregation in praise',
      'Music Education - Teaching basic music theory and vocal techniques',
      'Special Presentations - Christmas, Easter, and other special performances',
      'Recordings & Media - Producing children\'s worship content',
      'Community Outreach - Sharing the joy of worship in schools and events',
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/A_Sunday_school_children.jpg',
    videoUrl: 'https://res.cloudinary.com/dri60cqs8/video/upload/v1780821241/Children_Ministry_h0waat.mp4',
  },
  {
    id: 'youth',
    name: 'Youth Ministry',
    subtitle: 'Empowering Young Adults to Live Boldly for Christ',
    description: 'Our Youth Ministry connects young people with Jesus, equipping them with biblical wisdom, and inspiring them to be agents of change in their generation.',
    vision: 'We believe youth are the future of the church and society. Our vision is to raise a generation deeply rooted in God\'s word, passionate about their faith, and actively engaged in serving their communities.',
    verse: 'Don\'t let anyone look down on you because you are young, but set an example for the believers.',
    ref: '1 Timothy 4:12',
    activities: [
      'Youth Fellowship - Weekly gatherings for worship, connection, and faith growth',
      'Biblical Teaching - Deep dives into Scripture addressing real-life issues',
      'Mentorship & Discipleship - Guidance from mature believers',
      'Service & Outreach - Mission trips and community compassion programs',
      'Social Activities - Camps, retreats, and fun events building friendships',
      'Leadership Development - Training youth to discover gifts and lead',
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Drum_used_in_African_Independent_Church_worship_%288003246903%29.jpg',
    videoUrl: 'https://res.cloudinary.com/dri60cqs8/video/upload/v1780821222/1_kmgaf6.mp4',
  },
  {
    id: 'women',
    name: 'Women\'s Ministry',
    subtitle: 'Women Active in Faith and Service',
    description: 'Our Women\'s Ministry empowers women of all ages to grow in their faith, build meaningful relationships, and become bold witnesses for Christ.',
    vision: 'We believe women are essential to God\'s kingdom. Our vision is to cultivate a community of women deeply connected to God\'s word, supportive of one another, and actively engaged in proclaiming the good news.',
    verse: 'The Lord gives the command; the women who proclaim the good news are a great host.',
    ref: 'Psalm 68:11',
    activities: [
      'Women\'s Fellowship - Monthly gatherings for worship, study, and connection',
      'Bible Study Groups - In-depth exploration of God\'s word and daily application',
      'Mentorship Programs - Guidance, support, and accountability for spiritual growth',
      'Community Outreach - Serving vulnerable women, orphans, and widows',
      'Leadership Development - Training women for church and community leadership',
      'Special Events - Retreats, conferences, and celebrations of sisterhood',
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Gratitude_prayer.jpg',
    videoUrl: 'https://res.cloudinary.com/dri60cqs8/video/upload/v1780821240/2_uows8r.mp4',
  },
  {
    id: 'men',
    name: 'Men\'s Ministry',
    subtitle: 'Men Called to Lead with Faith and Integrity',
    description: 'Our Men\'s Ministry equips men to live out their faith with strength and conviction, providing a supportive community for spiritual growth and godly character.',
    vision: 'We believe men play a crucial role in their families, churches, and communities. Our vision is to cultivate God-fearing men who are spiritually mature, morally upright, and committed to serving others.',
    verse: 'Be watchful, stand firm in the faith, act like men, be strong.',
    ref: '1 Corinthians 16:13',
    activities: [
      'Men\'s Fellowship - Regular gatherings for worship, discipleship, and brotherhood',
      'Family Leadership - Teaching men to lead families spiritually',
      'Biblical Discipleship - Deep study of God\'s word for mature character',
      'Mentoring & Accountability - One-on-one and group support',
      'Service & Action - Hands-on projects demonstrating Christ\'s love',
      'Events & Retreats - Conferences and activities that deepen faith',
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Worship_section_in_a_church_05.jpg',
    videoUrl: 'https://res.cloudinary.com/dri60cqs8/video/upload/v1780821212/3_euvkhy.mp4',
  },
  {
    id: 'worship',
    name: 'Worship Ministry',
    subtitle: 'Encountering God Through Spirit-Empowered Worship',
    description: 'Our Worship Ministry leads the congregation into the manifest presence of God through music, prayer, and authentic communion, creating an atmosphere where the Holy Spirit moves.',
    vision: 'We envision a worshiping community where every heart is attuned to the presence of God, where believers encounter the living Christ, and where lives are transformed by authentic worship.',
    verse: 'The true worshipers will worship the Father in spirit and truth.',
    ref: 'John 4:23',
    activities: [
      'Sunday Worship Services - Spirit-filled worship with contemporary and traditional music',
      'Choir & Music Teams - Singing, instrumental music, and leading worship',
      'Worship Training - Discipleship in the art of worship and spiritual sensitivity',
      'Songwriting & Composition - Creating original worship songs',
      'Audio & Technical Excellence - Sound quality and technical support',
      'Special Events & Concerts - Worship nights and gospel concerts',
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/71/Worship_section_in_a_church_46.jpg',
    videoUrl: 'https://res.cloudinary.com/dri60cqs8/video/upload/v1780821222/1_kmgaf6.mp4',
  },
  {
    id: 'choir',
    name: 'Sayuni Harvesters Choir',
    subtitle: 'Carrying the Sound of GMC Through Praise',
    description: 'The Sayuni Harvesters Choir is a worship team carrying the sound of GMC through praise, testimony, and gospel music that points people back to Christ.',
    vision: 'We envision a worshiping community where every heart is attuned to God, where believers encounter Christ, and lives are transformed through authentic worship expressed through music.',
    verse: 'Make a joyful noise to the Lord, all the earth!',
    ref: 'Psalm 100:1',
    activities: [
      'Sunday Worship Leading - Spirit-filled worship during Sunday services',
      'Choir Performances - Gospel music, anthems, and special presentations',
      'Worship Training & Discipleship - Equipping leaders with biblical foundations',
      'Songwriting & Composition - Original worship songs from prayer',
      'Recordings & Media - Worship recordings and digital content',
      'Special Events & Concerts - Worship nights and gospel concerts',
    ],
    image: 'https://res.cloudinary.com/dri60cqs8/image/upload/v1780822774/IMG_0739_pbmk63.jpg',
    videoUrl: 'https://res.cloudinary.com/dri60cqs8/video/upload/v1780821240/2_uows8r.mp4',
  },
  {
    id: 'prayer',
    name: 'Prayer & Intercession',
    subtitle: 'Standing in the Gap Through Prayer',
    description: 'Our Prayer Ministry is dedicated to standing in prayer for families, the church, the nation, and every missionary work connected to GMC.',
    vision: 'We believe in the power of persistent prayer. Our vision is to build a praying church that intercedes for all people, believing God for transformation and breakthrough.',
    verse: 'Pray without ceasing.',
    ref: '1 Thessalonians 5:17',
    activities: [
      'Prayer Meetings - Weekly gatherings for corporate prayer',
      'Intercessory Teams - Dedicated teams praying for specific needs',
      'Night Vigils - Extended prayer watches',
      'Prayer Chain - Rapid response prayer network',
      'Prayer Training - Teaching on effective prayer and intercession',
      'Community Prayer Walks - Praying over neighborhoods and schools',
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Gratitude_prayer.jpg',
    videoUrl: 'https://res.cloudinary.com/dri60cqs8/video/upload/v1780821222/1_kmgaf6.mp4',
  },
  {
    id: 'missions',
    name: 'Missions & Outreach',
    subtitle: 'Going into All the World',
    description: 'Our Missions & Outreach Ministry mobilizes believers for evangelism, branch support, community care, and practical service beyond the sanctuary.',
    vision: 'We are committed to fulfilling the Great Commission. Our vision is to send missionaries, support churches, and serve communities with the love of Christ.',
    verse: 'Go therefore and make disciples of all nations.',
    ref: 'Matthew 28:19',
    activities: [
      'Evangelism Crusades - Sharing the gospel in local communities',
      'Branch Support - Strengthening and planting church branches',
      'Community Service - Practical help for widows, orphans, and needy',
      'Medical Missions - Health outreach in underserved areas',
      'Education Support - School supplies and scholarships',
      'Disaster Relief - Emergency assistance and food distribution',
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/FAME_Church_Worship_Service_%2824616670159%29.jpg',
    videoUrl: 'https://res.cloudinary.com/dri60cqs8/video/upload/v1780821222/1_kmgaf6.mp4',
  },
]

export const BRANCHES: Branch[] = [
  { name: 'Gosese', images: ['/images/Images/MAPPING/GOSESE/gm_opt.jpg', '/images/Images/MAPPING/GOSESE/gm1_opt.jpg', '/images/Images/MAPPING/GOSESE/gm2_opt.jpg', '/images/Images/MAPPING/GOSESE/gm3_opt.jpg'] },
  { name: 'Kioboke', images: ['/images/Images/MAPPING/KIOBOKE/gm4_opt.jpg', '/images/Images/MAPPING/KIOBOKE/gm5_opt.jpg', '/images/Images/MAPPING/KIOBOKE/gm6_opt.jpg', '/images/Images/MAPPING/KIOBOKE/gm7_opt.jpg'] },
  { name: 'Nyamekoma', images: ['/images/Images/MAPPING/NYAMEKOMA/gm8_opt.jpg', '/images/Images/MAPPING/NYAMEKOMA/gm9_opt.jpg', '/images/Images/MAPPING/NYAMEKOMA/gm10_opt.jpg', '/images/Images/MAPPING/NYAMEKOMA/gm11_opt.jpg'] },
  { name: 'Romasanda', images: ['/images/Images/MAPPING/ROMASANDA/gm12_opt.jpg', '/images/Images/MAPPING/ROMASANDA/gm13_opt.jpg', '/images/Images/MAPPING/ROMASANDA/gm14_opt.jpg', '/images/Images/MAPPING/ROMASANDA/gm15_opt.jpg'] },
  { name: 'Ntiyange', images: ['/images/Images/MAPPING/NTIYANGE/gm16_opt.jpg', '/images/Images/MAPPING/NTIYANGE/gm17_opt.jpg', '/images/Images/MAPPING/NTIYANGE/gm18_opt.jpg', '/images/Images/MAPPING/NTIYANGE/gm19_opt.jpg'] },
  { name: 'Nyanchabo', images: ['/images/Images/MAPPING/NYANCHABO/gm20_opt.jpg', '/images/Images/MAPPING/NYANCHABO/gm21_opt.jpg', '/images/Images/MAPPING/NYANCHABO/gm22_opt.jpg', '/images/Images/MAPPING/NYANCHABO/gm23_opt.jpg'] },
  { name: 'Rongabi', images: ['/images/Images/MAPPING/RONGABI/gm24_opt.jpg', '/images/Images/MAPPING/RONGABI/gm25_opt.jpg', '/images/Images/MAPPING/RONGABI/gm26_opt.jpg', '/images/Images/MAPPING/RONGABI/gm27_opt.jpg'] },
  { name: 'Mabera', images: ['/images/Images/MAPPING/MABERA/gm28_opt.jpg', '/images/Images/MAPPING/MABERA/gm29_opt.jpg', '/images/Images/MAPPING/MABERA/gm30_opt.jpg', '/images/Images/MAPPING/MABERA/gm31_opt.jpg'] },
]

export const IMAGE_CREDITS = [
  { file: 'Worship section in a church 05.jpg', author: 'Wikimedia Commons', license: 'CC BY-SA 4.0', source: 'https://commons.wikimedia.org/wiki/File:Worship_section_in_a_church_05.jpg' },
  { file: 'A Sunday school children.jpg', author: 'Wikimedia Commons', license: 'CC BY-SA 4.0', source: 'https://commons.wikimedia.org/wiki/File:A_Sunday_school_children.jpg' },
  { file: 'Gratitude prayer.jpg', author: 'Wikimedia Commons', license: 'CC BY-SA 4.0', source: 'https://commons.wikimedia.org/wiki/File:Gratitude_prayer.jpg' },
  { file: 'Drum used in African Independent Church worship.jpg', author: 'Wikimedia Commons', license: 'No restrictions', source: 'https://commons.wikimedia.org/wiki/File:Drum_used_in_African_Independent_Church_worship_(8003246903).jpg' },
  { file: 'Worship section in a church 46.jpg', author: 'Wikimedia Commons', license: 'CC BY-SA 4.0', source: 'https://commons.wikimedia.org/wiki/File:Worship_section_in_a_church_46.jpg' },
  { file: 'FAME Church Worship Service.jpg', author: 'Wikimedia Commons', license: 'CC BY 2.0', source: 'https://commons.wikimedia.org/wiki/File:FAME_Church_Worship_Service_(24616670159).jpg' },
]
