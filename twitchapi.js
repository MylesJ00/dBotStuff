async(params, auths) =>{
    const axios = require("@pipedreamhq/platform").axios
    const userInfo = await axios(this, {
        url: `https://api.twitch.tv/helix/users?login=${params.username}`,
        headers: {
          Authorization: `Bearer ${auths.twitch.oauth_access_token}`,
          "Client-ID": `${auths.twitch.oauth_client_id}`,
        }
    })

    if (userInfo.data[0]) {
        const channelInfo = await axios(this, {
            url: `https://api.twitch.tv/helix/channels?broadcaster_id=${userInfo.data[0].id}`,
            headers: {
              Authorization: `Bearer ${auths.twitch.oauth_access_token}`,
             "Client-ID": `${auths.twitch.oauth_client_id}`,
        },
    })
    return channelInfo.data[0]
  } else return $send("No user found with that username")
}
