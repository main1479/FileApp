const filesLinks = [
	{
		label: 'Recents',
		icon: './img/icons.svg#icon-recents',
		current: true,
	},
];

const locationsLinks = [
	{
		label: 'iCloud Drive',
		icon: './img/icons.svg#icon-icloud',
	},
	{
		label: 'On My iPad',
		icon: './img/icons.svg#icon-ipad',
	},
	{
		label: 'Recently Deleted',
		icon: './img/icons.svg#icon-bin',
	},
];

const favoroutesLinks = [
	{
		label: 'Favourites',
		icon: './img/icons.svg#icon-favourites',
	},
	{
		label: 'Selfies',
		icon: './img/icons.svg#icon-selfies',
	},
];

const tagsLinks = [
	{
		label: 'Red',
		icon: './img/colors.svg#icon-red',
	},
	{
		label: 'Orange',
		icon: './img/colors.svg#icon-orange',
	},
	{
		label: 'Yellow',
		icon: './img/colors.svg#icon-yellow',
	},
	{
		label: 'Green',
		icon: './img/colors.svg#icon-green',
	},
	{
		label: 'Blue',
		icon: './img/colors.svg#icon-blue',
	},
	{
		label: 'Purple',
		icon: './img/colors.svg#icon-purple',
	},
	{
		label: 'Grey',
		icon: './img/colors.svg#icon-grey',
	},
	{
		label: 'Work',
		icon: './img/colors.svg#icon-work',
	},
];

const dropdownLists = [
	{
		label: 'Icons',
		icon: './img/icons.svg#icon-grid',
	},
	{
		label: 'List',
		icon: './img/icons.svg#icon-list',
		done: true,
	},
	{
		label: 'Columns',
		icon: './img/icons.svg#icon-columns',
		devider: true,
	},
	{
		label: 'Name',
		icon: './img/icons.svg#icon-chevron-up',
		done: true,
	},
	{
		label: 'Kind',
	},
	{
		label: 'Date',
	},
	{
		label: 'Size',
	},
	{
		label: 'Tags',
		devider: true,
	},
	{
		label: 'User Groups',
	},
];

const songsList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// =========================================
// files links markup
// =========================================
const initFilesLinksMarkup = () => {
	const filesLinksParent = document.querySelector('.sidebar__menu-list--files');
	const filesLinksMarkup = filesLinks
		.map((link) => {
			return `<li>
            <a href="#" class="${link.current ? 'active' : 'not-active'}">
               <svg>
                  <use xlink:href="${link.icon}"></use>
               </svg>
               ${link.label}
            </a>
         </li>`;
		})
		.join('');

	filesLinksParent.innerHTML = '';
	filesLinksParent.insertAdjacentHTML('afterbegin', filesLinksMarkup);
};

// =========================================
// locations links markup
// =========================================
const initLocationsLinksMarkup = () => {
	const locationsLinksParent = document.querySelector('.sidebar__menu-list--locations');
	const locationsLinksMarkup = locationsLinks
		.map((link) => {
			return `<li>
           <a href="#" class="${link.current ? 'active' : 'not-active'}">
               <svg>
                  <use xlink:href="${link.icon}"></use>
               </svg>
               ${link.label}
            </a>
         </li>`;
		})
		.join('');

	locationsLinksParent.innerHTML = '';
	locationsLinksParent.insertAdjacentHTML('afterbegin', locationsLinksMarkup);
};

// =========================================
// favourites links markup
// =========================================
const initFavoroutesLinksMarkup = () => {
	const favoroutesLinksParent = document.querySelector('.sidebar__menu-list--favorites');
	const favoroutesLinksMarkup = favoroutesLinks
		.map((link) => {
			return `<li>
			<a href="#" class="${link.current ? 'active' : 'not-active'}">
				<svg>
					<use xlink:href="${link.icon}"></use>
				</svg>
				${link.label}
			</a>
		</li>`;
		})
		.join('');

	favoroutesLinksParent.innerHTML = '';
	favoroutesLinksParent.insertAdjacentHTML('afterbegin', favoroutesLinksMarkup);
};

// =========================================
// tags links markup
// =========================================
const initTagsLinksMarkup = () => {
	const tagsLinksParent = document.querySelector('.sidebar__menu-list--tags');
	const tagsLinksMarkup = tagsLinks
		.map((link) => {
			return `<li>
			<a href="#" class="${link.current ? 'active text__bold' : 'not-active text__bold'}">
				<svg>
					<use xlink:href="${link.icon}"></use>
				</svg>
				${link.label}
			</a>
		</li>`;
		})
		.join('');

	tagsLinksParent.innerHTML = '';
	tagsLinksParent.insertAdjacentHTML('afterbegin', tagsLinksMarkup);
};

// =========================================
// dropdown lists markup
// =========================================
const initDropdownListsMarkup = () => {
	const dropdownListsParent = document.querySelector('.dropdown__list');
	const dropdownListsMarkup = dropdownLists
		.map((link) => {
			return `<li class="${link.devider ? 'mb-1 devider' : ''}">
						<a href="#">
							<svg class="${link.done ? 'done' : 'done hide'}">
								<use xlink:href="./img/icons.svg#icon-done"></use>
							</svg>
							<span>${link.label}</span>
							<svg class="${link.icon ? 'icon' : 'icon hide'}">
								<use xlink:href="${link.icon}"></use>
							</svg>
						</a>
					</li>`;
		})
		.join('');

	dropdownListsParent.innerHTML = '';
	dropdownListsParent.insertAdjacentHTML('afterbegin', dropdownListsMarkup);
};

// // =========================================
// // Homepage content markup
// // =========================================
const initSongListMarkup = () => {
	const songListParent = document.querySelector('.song__list');
	const songListMarkup = songsList
		.map((item) => {
			return `<li class="song__list-item">
							<figure class="song__list-img">
								<img src="./img/list-img.png" alt="song thumbnail">
							</figure>
							<div class="song__list-details">
								<div class="song__list-details--left">
									<h4 class="title">
										My Song2
									</h4>
									<p class="p__text">18,4 MB - On My iPad</p>
								</div>
								<p class="p__text">
									Yesterday, 18:07
								</p>
							</div>
						</li>`;
		})
		.join('');

	songListParent.innerHTML = '';
	songListParent.insertAdjacentHTML('afterbegin', songListMarkup);
};

const init = () => {
	initFilesLinksMarkup();
	initLocationsLinksMarkup();
	initFavoroutesLinksMarkup();
	initTagsLinksMarkup();
	initDropdownListsMarkup();
	initSongListMarkup();
};

init();

// =============================================
// dropdown list
// =============================================

const dropdownBtn = document.querySelector('.dropdown');

dropdownBtn.addEventListener('click', function (e) {
	const dropdownBody = this.querySelector('.dropdown__list');
	if (dropdownBody.style.maxHeight) {
		dropdownBody.style.maxHeight = null;
		this.classList.remove('active');
	} else {
		dropdownBody.style.maxHeight = dropdownBody.scrollHeight + 'px';
		this.classList.add('active');
	}
});

// =============================================
// sidebar dropdown
// =============================================

const dropdownTriggers = document.querySelectorAll('.dropdown__trigger');

dropdownTriggers.forEach((btn) => {
	btn.addEventListener('click', function () {
		const dropdownBody = this.nextElementSibling;
		if (dropdownBody.style.maxHeight) {
			dropdownBody.style.maxHeight = null;
			dropdownBody.classList.remove('active');
			btn.classList.remove('active');
		} else {
			dropdownBody.style.maxHeight = dropdownBody.scrollHeight + 'px';
			dropdownBody.classList.add('active');
			btn.classList.add('active');
		}
	});
	// btn.click();
});

// ===========================================================
// sidebar toggle
// ===========================================================

const sidebarTogglers = document.querySelectorAll('.sidebar__toggler');
const sidebarIcon = document.querySelectorAll('.sidebar__toggle-icon');

sidebarTogglers.forEach((btn) => {
	btn.addEventListener('click', function () {
		document.body.classList.toggle('sidebar-active');
	});
});

window.addEventListener('load', function () {
	if (window.screen.availWidth <= 1024) {
		document.body.classList.toggle('sidebar-active');
	}
});
