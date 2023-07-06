var apiKey = "9c9246aeb1b94fb7b6af308a45f0bf18";

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.bungie.net/platform/Destiny/Manifest/InventoryItem/1274330687/", true);
xhr.setRequestHeader("X-API-Key", apiKey);

xhr.onreadystatechange = function()
{
    if(this.readyState === 4 && this.status === 200)
    {
        var json = JSON.parse(this.responseText);
        console.log(json.Response.data.inventoryItem.itemName);
    }
}

xhr.send();