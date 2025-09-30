import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-container',
  standalone: false,
  templateUrl: './footer-container.component.html',
  styleUrl: './footer-container.component.css'
})
export class FooterContainerComponent {
  center: google.maps.LatLngLiteral = {lat: 4.674478121982566, lng: -74.05299478768056};
  zoom = 17;

  shop: google.maps.LatLngLiteral = {lat: 4.674478121982566, lng: -74.05299478768056};
  zoomShop = 17;

  mapOptions: google.maps.MapOptions = {
    disableDefaultUI: true,  // ejemplo: sin botones por defecto
    styles: [
      {
        elementType: 'geometry',
        stylers: [{ color: '#212121' }]
      },
      {
        elementType: 'labels.icon',
        stylers: [{ visibility: 'off' }]
      },
      {
        elementType: 'labels.text.fill',
        stylers: [{ color: '#757575' }]
      },
      {
        elementType: 'labels.text.stroke',
        stylers: [{ color: '#212121' }]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{ color: '#38414e' }]
      }
    ]
  };

}
