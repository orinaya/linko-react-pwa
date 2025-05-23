// src/hooks/TripHook.js
'use client'

import { useEffect, useState } from "react"
import { getAllTrips } from "@/services/api"

export const useTripHook = () => {
  const [trips, setTrips] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchTrips = async () => {
      setLoading(true)
      try {
        const data = await getAllTrips()
        setTrips(data || [])
      } catch (err) {
        console.error("Erreur lors du chargement des trips :", err)
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    fetchTrips()
  }, [])

  return { trips, setTrips, loading, error }
}
