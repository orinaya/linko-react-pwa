import axios from 'axios'
import { createClient } from '@supabase/supabase-js'


const supabaseUrl = `${process.env.NEXT_PUBLIC_SUPABASE_API_URL}`
const supabaseKey = `${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`
const supabase = createClient(supabaseUrl, supabaseKey)

async function getAllUsers() {
  const { data, error } = await supabase
    .from('User')
    .select('*')

  if (error) {
    console.error('Erreur lors de la récupération :', error)
    return []
  }

  return data
}

async function getAllGroups() {
  const { data, error } = await supabase
    .from('Group')
    .select('*')

  if (error) {
    console.error('Erreur lors de la récupération :', error)
    return []
  }

  return data
}

async function getAllTrips() {
  const { data, error } = await supabase
    .from('Trip')
    .select('*')

  if (error) {
    console.error('Erreur lors de la récupération :', error)
    return []
  }

  return data
}


export {
  getAllUsers,
  getAllGroups,
  getAllTrips
}


