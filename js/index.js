for (i = 1; i <= 21; i ++) {
	var fileName = '';
	if (String(i).length == 1) {
		fileName = '0' + i;
	} else {
		fileName = String(i);
	}
	fileName = fileName + '.jpg';

	var append = [];
	append.push('<div class="swiper-slide swiper-slide-active">');
	append.push('<img src="./pictures/' + fileName + '" width="100%" loading="lazy">');
	append.push('</div>');
	$('.swiper-wrapper').append(append.join(''));
}

$(document).ready(() => {
	var swiper = new Swiper('.swiper-container', {
		lazy: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		slidesPerView: 1,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
			loop: true
		}
	});

	Kakao.init('e851273b0118339703fdc6272d31e046');
    Kakao.Share.createDefaultButton({
		container: '#kakao-link-btn',
		objectType: 'feed',
		content: {
			title: '선호 생일잔치에 초대합니다',
			description: '#생일 #돌잔치 #선호찡 #축하',
			imageUrl: 'https://youniforever.github.io/1st_birth/images/kakao-main.png',
			link: {
				mobileWebUrl: 'https://youniforever.github.io/1st_birth',
				webUrl: 'https://youniforever.github.io/1st_birth',
			},
		}
    });
});