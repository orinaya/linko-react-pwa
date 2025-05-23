'use client'; // (si vous êtes en App Router)

import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

const Map = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-1.619812, 47.244939],
      zoom: 14,
    });

    new mapboxgl.Marker().setLngLat([-1.619812, 47.244939]).addTo(map);

    return () => map.remove(); 
  }, []);

  return (
    <div
      ref={mapContainerRef}
      style={{ width: '100%', height: '100%', borderRadius: '8px' }}
    />
  );
};


export default function Home() {
  return (
    <div className="w-full h-screen">
      <Map></Map>
    </div>
  );
}
