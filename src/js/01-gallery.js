import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");

const createGalleryItem = ({ preview, original, description }) =>
	`<a class="gallery__item" href="${original}">
			<img
				class="gallery__image"
				src="${preview}"
				alt="${description}"
			/>
		</a>`;

const galleryMarkup = galleryItems.map(item => createGalleryItem(item)).join("");
gallery.insertAdjacentHTML("afterbegin", galleryMarkup);

const lightBox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 500 });

console.log(galleryItems);
