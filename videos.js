/*
  XTRA BBF GYM — VIDEO GALLERY LIST
  ==================================
  This is the ONLY place to edit when adding or removing gallery videos.
  The cards, popup player, filters, "X vidéos" counter and Google video info
  are all built from this list. The order here is the order on the site.

  TO ADD A NEW INSTAGRAM VIDEO
  1. Upload the video to Cloudinary (Media Library -> Upload).
  2. Copy its URL. It looks like:
     https://res.cloudinary.com/dlllcg1cm/video/upload/v1234567890/my_clip.mp4
  3. Copy one block below, paste it at the TOP of the list, and change:
       src      : the Cloudinary URL (in quotes)
       title    : short title shown on the card
       tag      : Ambiance, Coaching, Résultats or TV (a new word creates a new filter)
       poster   : second of the video used as the thumbnail (pick a clear frame)
       duration : length shown on the card, like "0:42"
  4. Keep the comma between blocks. Commit. The site updates in about a minute.

  If this file has a mistake, the site still works: it falls back to the
  built-in list. Optional fields: subtitle, description, date.
*/
window.XTRA_VIDEOS = [
  {
    src: "https://res.cloudinary.com/dlllcg1cm/video/upload/q_auto/f_auto/v1795298497/SaveClip.App_AQOilhTs2cQbJqw5kUL6WbVN7SvqvQ-T8uVdv237cPEn-iJ_tCD083GdrB4pGgz_rDu731shyClZKsQtrBnjo4UK_hJV05NqIqosAXY_teeydu.mp4",
    title: "Une journée chez Xtra BBF",
    tag: "Ambiance",
    poster: 7,
    duration: "0:26"
  },
  {
    src: "https://res.cloudinary.com/dlllcg1cm/video/upload/q_auto/f_auto/v1795298501/SaveClip.App_AQMM2gLlaQKZcCh5wrv33-qS6kyfIcf3qn0Ntpo6WlF5dOgXQGzXCrsIRrNu5yRoYTIbN0xPdrT46z5TgbUwB2G1Tnd32UfY85sX7kc_gjew4q.mp4",
    title: "Détermination",
    tag: "Résultats",
    poster: 9,
    duration: "0:16"
  },
  {
    src: "https://res.cloudinary.com/dlllcg1cm/video/upload/q_auto/f_auto/v1795298501/SaveClip.App_AQNQtgj0m2lnWPkt7JsbNdMcjDj2c4WH95guPPEyXHwuy2k4noEafKeF5otnmoym_8TU0MLhWJ5me-XQ6qtPH20KhYG4ZvzBcQx7bS0_svgezu.mp4",
    title: "Xtra BBF en images",
    tag: "Ambiance",
    poster: 27,
    duration: "0:48"
  },
  {
    src: "https://res.cloudinary.com/dlllcg1cm/video/upload/q_auto/f_auto/v1795298501/SaveClip.App_AQN85aYefL6p1DwPZAqZhGNDcPLQv8i91NFchI3JRo5DYIsb7YuvMw819uCo3wGs9eEGU-RurqyK2bIzxOGiB8HcqQHH41fM2pFUNgo_sui2q7.mp4",
    title: "Coaching au quotidien",
    tag: "Coaching",
    poster: 16,
    duration: "0:19"
  },
  {
    src: "https://res.cloudinary.com/dlllcg1cm/video/upload/q_auto/f_auto/v1795298502/SaveClip.App_AQPYhZyWHdHLWxmYHa-Pc1NHUn66eYXuOUrQQUSO9Q3ME3cxhGgWaKESXfc6teBPY-zT3Rmja3RfHb3br5t7XjKwhbmugQ2UaSiCrwQ_yp55z2.mp4",
    title: "1% meilleur chaque jour",
    tag: "Coaching",
    poster: 7,
    duration: "0:14"
  },
  {
    src: "https://res.cloudinary.com/dlllcg1cm/video/upload/q_auto/f_auto/v1781054035/SaveClip.App_AQOtRAcQ1a4ZELv5a5lqisX-pI8s5h9wLhTYNERWkmrzNLNFrEgm55HVpMWCOnnAfjiI_fdiK9lgI9y9d0B481FlUtoFqZji9CEYgoY_zxooly.mp4",
    title: "Bienvenue chez Xtra BBF",
    tag: "Ambiance",
    poster: 9,
    duration: "0:53"
  },
  {
    src: "https://res.cloudinary.com/dlllcg1cm/video/upload/q_auto/f_auto/v1780770941/AQNA5MKGUdT5VKjWy--2UEKwpnmx7ThTfLxjJzZiuuIKXbEoLZbTW47rYusirbADcmqCHkamXFMwmbzH6pPFkFT7e1nzi6xk_ywmwtj.mp4",
    title: "Coaching personnalisé",
    tag: "Coaching",
    poster: 3,
    duration: "0:17"
  },
  {
    src: "https://res.cloudinary.com/dlllcg1cm/video/upload/q_auto/f_auto/v1780770752/Xtra_bbf_gym_%D9%82%D9%88%D8%A9_%D8%B7%D8%A7%D9%82%D8%A9_%D9%86%D8%AA%D8%A7%D8%A6%D8%AC_%EF%B8%8F__%EF%B8%8F_Coaching_Motivation_Ambiance_top_gtaxlx.mp4",
    title: "Résultats & motivation",
    tag: "Résultats",
    poster: 6,
    duration: "0:22"
  },
  {
    src: "https://res.cloudinary.com/dlllcg1cm/video/upload/q_auto/f_auto/v1780770750/Vos_clubs_Xtra_bbf_gym_sont_ouverts_dans_leurs_horaires_habituels_Voici_votre_HORAIRES._rozrvt.mp4",
    title: "Nos coachs en action",
    tag: "Coaching",
    poster: 9,
    duration: "0:35"
  },
  {
    src: "https://res.cloudinary.com/dlllcg1cm/video/upload/q_auto/f_auto/v1780770749/T_as_pas_le_droit_de_lacher_xex1jb.mp4",
    title: "Ne lâche rien",
    tag: "Coaching",
    poster: 13,
    duration: "0:53"
  },
  {
    src: "https://res.cloudinary.com/dlllcg1cm/video/upload/q_auto/f_auto/v1780770941/XTRA_BBF_GYMBienvenue_%C3%A0_tous_Salle_de_sport_moderne_et_motivante_Coachs_%C3%A0_votre_%C3%A9coute_x4fcf0.mp4",
    title: "L'ambiance en salle",
    tag: "Ambiance",
    poster: 2,
    duration: "0:09"
  },
  {
    src: "https://res.cloudinary.com/dlllcg1cm/video/upload/q_auto/f_auto/v1781054021/SaveClip.App_AQNWxdz9hsHeuFMgzv5FVhA6FpgfeBJAyqi284LHr8BDRFtJMzDnH12C2j95Tw72NM2eSI8pqErkAMs3K4nr8Il6QVzYFVrUErqk61Q_hlqv42.mp4",
    title: "Xtra BBF à la TV",
    subtitle: "Hiwar Tounsi",
    tag: "TV",
    poster: 40,
    duration: "2:00"
  }
];
