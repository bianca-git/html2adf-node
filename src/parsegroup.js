import parseitem from "./parseitem.js";

class ParseObject {
    constructor() {
        this.item = {
            "msId": "",
            "description": "",
            "descriptionHTML": ""
        }
    }
    parse(item) {
        item.description = parseitem(item.descriptionHTML)
        item = JSON.parse(JSON.stringify(item))
        return item;
    }

}

const parsegroup = (data) => {
    const parseItem = new ParseObject();
    const items = [];
    data.forEach(item => {
        items.push(parseItem.parse(item))
    });
    return items;    
}

export default parsegroup;