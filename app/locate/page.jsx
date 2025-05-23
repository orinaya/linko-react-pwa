'use client';

import { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

const Map = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    const initializeMap = (lng, lat) => {
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: 14,
      });

      new mapboxgl.Marker({ color: 'blue' })
        .setLngLat([lng, lat])
        .addTo(map);

      return map;
    };

    let mapInstance;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { longitude, latitude } = position.coords;
          mapInstance = initializeMap(longitude, latitude);
        },
        (error) => {
          console.error('Erreur géolocalisation :', error.message);
          mapInstance = initializeMap(-1.619812, 47.244939);
        },
        { enableHighAccuracy: true }
      );
    }

    return () => {
      if (mapInstance) mapInstance.remove();
    };
  }, []);

  return (
    <div
      ref={mapContainerRef}
      className="w-full h-full min-h-[500px] rounded-lg"
    />
  );
};

export default function Profile() {
  return (
    <div className="w-full h-screen min-h-[500px]">
      <Map />
    </div>
  );
}
