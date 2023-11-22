import EmberObject from "@ember/object";
import AdComponent from "discourse/plugins/discourse-adplugin/discourse/components/ad-component";


export default AdComponent.extend({
 
  addExcoPlayer() {
    const currentUser = this.get("currentUser");

    if (currentUser && currentUser.username) {
      let valueExists = true;

      for (const obj of currentUser.groups) {
        if (
          obj.name === "admins" ||
          obj.name === "Pro-Members" ||
          obj.name === "Business-Member" ||
          obj.name === "Pro-Fighters" ||
          obj.name === "Black-Belts" ||
          obj.name === "Mod-Team" ||
          obj.name === "OG-Mods" ||
          obj.name === "Top-Men"
        ) {
          valueExists = false;
          break; 
        }
      }

      if (valueExists) {
        setTimeout(() => {
          Ember.$(".video_section").html('');
          Ember.$('<div class="video_section"><div id="ace0fe48-0bdb-4202-b78c-dafca2c16291"></div></div>').insertAfter(".side-ad-outlet.discourse-adplugin");
        }, 1000);
      }
    }
  },

  
  didInsertElement() {
    this._super(...arguments);

   
    Ember.$.getScript("https://player.ex.co/player/ace0fe48-0bdb-4202-b78c-dafca2c16291")
      .done(() => {
        
        this.addExcoPlayer();
      })
      .fail((jqxhr, settings, exception) => {
       
        console.error("Failed to load Ex.co player script:", exception);
      });
  },

});