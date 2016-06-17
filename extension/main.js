/*var opt = {
                  type: "basic",
                  title: "Primary Title",
                  message: "Primary message to display",
                  iconUrl: "Drawing.png"
        }*/
function share_gp() {
    var list1 = $('.dropdown-menu ul');
    list1.each(function (i, dropper) {
        try {
            if (dropper.children.length === 8 || dropper.children.length === 6) {
                console.log(dropper);
                var share_button = $(dropper).prepend('<li> <button id="link" type="button" class="dropdown-link gp_tweet">Share on Google Plus</button> </li>');
                share_button = share_button.find('.gp_tweet');
                share_button.click(function () {
                    var post = $(this).parents().eq(7).find('.tweet-timestamp').attr("href");
                    url = 'https://twitter.com' + post;
                    console.log(url);
                    window.open('https://plus.google.com/share?url=' + url);
                });
            }
             
            /*chrome.notifications.create(opt,callback);
            function callback(){
                console.log("Hello");
            }*/
        }
        catch (dropper) {
            console.log('Cant find a place to add button');
        }

    });

}
setInterval(share_gp, 5000);
