
$(function () {
  /*=================================================
  スムーススクロール
  ===================================================*/
  // ページ内のリンクをクリックした時に動作する
  $('a[href^="#"]').click(function () {
    // クリックしたaタグのリンクを取得
    let href = $(this).attr("href");
    // ジャンプ先のid名をセット hrefの中身が#もしくは空欄なら,htmlタグをセット
    let target = $(href == "#" || href == "" ? "html" : href);
    // ページトップからジャンプ先の要素までの距離を取得
    let position = target.offset().top;
    // animateでスムーススクロールを行う   ページトップからpositionだけスクロールする
    // 600はスクロール速度で単位はミリ秒  swingはイージングのひとつ
    $("html, body").animate({ scrollTop: position }, 600, "swing");
    // urlが変化しないようにfalseを返す
    return false;
  });
});


//Swipeスライダー
const swiper = new Swiper('.sample-slider', {
  loop: true,
  loopedSlides: 4, // ← 追加（実スライド数を指定）
  slidesPerView: 1.4,       //追加（スライドを複数枚表示に）
  centeredSlides: true,   //追加（1枚目のスライドを真ん中に）                     //ループ
  effect: "coverflow",    //追加（coverflowエフェクトを適用）
  coverflowEffect: {          // 追加
    rotate: 0,              // 追加 (前後のスライドの回転)
    depth: 200,             // 追加 (前後のスライドの奥行)
    stretch: 30,            // 追加 (スライド間のスペース)
    modifier: 1,            // 追加 (rotate・depth・stretchの値を乗算する)
    scale: 1,               // 追加 (前後のスライドのサイズ比率)
    slideShadows: false,    // 追加 (前後のスライド表面の影の有無)
  },                          // 追加
  pagination: {                       //ページネーション（ドット）
    el: '.swiper-pagination',
  },
  navigation: {                       //ナビゲーション（矢印）
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
})


$('.gallery').slick({
  infinite: true,
  fade: true,
  arrows: true,
  prevArrow: '<div class="slick-prev"></div>',
  nextArrow: '<div class="slick-next"></div>',
});

// .choice-btn を Slick Carousel として初期化しない

// .choice-btn li のクリックイベントでメイン画像を切り替える
$('.choice-btn li').click(function() {
  const index = $(this).index();
  $('.gallery').slick('slickGoTo', index);

  // 選択状態のクラスを付与・削除
  $('.choice-btn li').removeClass('slick-current');
  $(this).addClass('slick-current');
});

// メインスライドの変更に合わせてサムネイルの選択状態を更新
$('.gallery').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
  $('.choice-btn li').removeClass('slick-current');
  $('.choice-btn li').eq(nextSlide).addClass('slick-current');
});

// 最初のサムネイルに slick-current クラスを付与 (初期表示)
$('.choice-btn li:first-child').addClass('slick-current');
  /*=================================================
  アコーディオン
  ===================================================*/

  $('.title-container').on('click', function() {//タイトル要素をクリックしたら
    $('.box').slideUp(500);//クラス名.boxがついたすべてのアコーディオンを閉じる
      
    var findElm = $(this).next(".box");//タイトル直後のアコーディオンを行うエリアを取得
      
    if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
      $(this).removeClass('close');//クラス名を除去    
    }else{//それ以外は
      $('.close').removeClass('close'); //クラス名closeを全て除去した後
      $(this).addClass('close');//クリックしたタイトルにクラス名closeを付与し
      $(findElm).slideDown(500);//アコーディオンを開く
    }
});

// ハンバーガーメニュー
  $('.hamburger').click(function() {
    $('.mobile-menu').toggleClass('open');
    $(this).toggleClass('active');

    if ($('.mobile-menu').hasClass('open')) {
      $('main').css('transform', 'translateX(-300px)');
    } else {
      $('main').css('transform', 'translateX(0)');
    }
  });

