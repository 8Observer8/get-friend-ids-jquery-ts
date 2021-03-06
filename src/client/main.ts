import * as $ from "jquery";

$(() =>
{
    const user_id = ; // Add your id
    const access_token = ""; // Add your access_token (see the documentation: https://vk.com/dev/first_guide)
    const count = 10;
    const version = "5.52";

    const url = `https://api.vk.com/method/friends.get` +
        `?user_id=${user_id}` +
        `&count=${count}` +
        `&access_token=${access_token}` +
        `&v=${version}`;

    $.ajax({
        url: url,
        method: "GET",
        dataType: "JSONP",
        success:
            (data) =>
            {
                console.log(data);
            }
    });
});
