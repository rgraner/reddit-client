export function timeSince(createdTime) {

    const date = new Date(createdTime * 1000);
    const seconds = Math.floor((new Date() - date) / 1000);
  
    let interval = Math.floor(seconds / 31536000);
    
    if (interval > 1) {
      return interval + "years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return interval + "months";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return interval + "d";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return interval + "h";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + "m";
    }
    return Math.floor(seconds) + "s";
  }

  