async (params, auths) => {
    const url = auths.discord_webhook.oauth_uid
    let content = params.message
    const { embeds, username, avatar_url } = params

    if (!content && !embeds) {
        throw new Error("This action expects a message OR an embeds param. Please enter one or the other from the params menu above")
    }

    return await require("@pipedreamhq/platform").axios(this, {
        method: "POST",
        url,
        headers: {
          "Content-Type": "application/json"
        },
        data: {
            content,
            embeds,
            username,
            avatar_url,
        }
    })
}
