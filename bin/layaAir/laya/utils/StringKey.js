/**
     * @private
     * <code>StringKey</code> 类用于存取字符串对应的数字。
     */
export class StringKey {
    constructor() {
        /*[DISABLE-ADD-VARIABLE-DEFAULT-VALUE]*/
        this._strsToID = {};
        this._idToStrs = [];
        this._length = 0;
    }
    //TODO:
    /**
     * 添加一个字符。
     * @param	str 字符，将作为key 存储相应生成的数字。
     * @return 此字符对应的数字。
     */
    //TODO:coverage
    add(str) {
        var index = this._strsToID[str];
        if (index != null)
            return index;
        this._idToStrs[this._length] = str;
        return this._strsToID[str] = this._length++;
    }
    /**
     * 获取指定字符对应的ID。
     * @param	str 字符。
     * @return 此字符对应的ID。
     */
    //TODO:coverage
    getID(str) {
        var index = this._strsToID[str];
        return index == null ? -1 : index;
    }
    /**
     * 根据指定ID获取对应字符。
     * @param  id ID。
     * @return 此id对应的字符。
     */
    //TODO:coverage
    getName(id) {
        var str = this._idToStrs[id];
        return str == null ? undefined : str;
    }
}
