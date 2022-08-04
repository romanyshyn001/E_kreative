import mainURL from "./mainUrl";

const announcementsApi = {
    getAnnouncementsApi: async() =>{
      console.log()
      return await mainURL.get('announcements',)
    },
}
export default announcementsApi