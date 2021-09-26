const converter = {
    //#region JSON
    /**
     * Serialize object
     * @author dvhung1 (26/09/2021)
     */
    Serialize(object) {
        return JSON.stringify(object);
    },

    /**
     * Deserialize object
     * @param {string} jsonString Nội dung string của JSON
     * @author dvhung1 (26/09/2021)
     */
    Deserialize(jsonString) {
        try {
            return JSON.parse(jsonString);
        } catch (error) {
            return undefined;
        }
    },
    //#endregion

    //#region Base 64
    Base64Encode() {},
    Base64Decode() {},
    //#endregion

    //#region HTML Encode/Decode
    UrlEncode() {},
    UrlDecode() {},
    TextDecode() {},
    TextEncode() {},
    //#endregion

    //#region Convert string to type
    ConvertDataToType(inputString, type) {},
    //#endregion
};

export default converter;
