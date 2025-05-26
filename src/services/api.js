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

async function getTripGroups() {
  const { data, error } = await supabase
    .from('Trip_Group')
    .select('*');

  if (error) {
    console.error('Erreur lors de la récupération des Trip_Group :', error);
    return [];
  }
  return data;
}

async function getUsersByTripId(tripId) {

  // get all group with trip_id
  const { data: tripGroups, error: tripGroupsError } = await supabase
    .from('Trip_Group')
    .select('group_id')
    .eq('trip_id', tripId);

  if (tripGroupsError) {
    console.error('Erreur lors de la récupération des Trip_Group :', tripGroupsError);
    return [];
  }

  const groupIds = tripGroups.map(tg => tg.group_id);

  if (groupIds.length === 0) return [];

  // get all user_id from Group_User 
  const { data: groupUsers, error: groupUsersError } = await supabase
    .from('Group_User')
    .select('user_id')
    .in('group_id', groupIds);

  if (groupUsersError) {
    console.error('Erreur lors de la récupération des Group_User :', groupUsersError);
    return [];
  }

  const userIds = groupUsers.map(gu => gu.user_id);

  if (userIds.length === 0) return [];

  // get all users 
  const { data: users, error: usersError } = await supabase
    .from('User')
    .select('*')
    .in('id', userIds);

  if (usersError) {
    console.error('Erreur lors de la récupération des utilisateurs :', usersError);
    return [];
  }

  return users;
}



export {
  getAllUsers,
  getAllGroups,
  getAllTrips,
  getTripGroups,
  getUsersByTripId 
}


