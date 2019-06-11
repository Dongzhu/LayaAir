/**
 * @private
 * <code>GeometryElement</code> 类用于实现几何体元素,该类为抽象类。
 */
export class GeometryElement {
    /**
     * 创建一个 <code>GeometryElement</code> 实例。
     */
    constructor() {
        /*[DISABLE-ADD-VARIABLE-DEFAULT-VALUE]*/
        this._destroyed = false;
    }
    /**
     * 获取是否销毁。
     * @return 是否销毁。
     */
    get destroyed() {
        return this._destroyed;
    }
    /**
     * 获取几何体类型。
     */
    _getType() {
        throw "GeometryElement:must override it.";
    }
    /**
     * @private
     * @return  是否需要渲染。
     */
    _prepareRender(state) {
        return true;
    }
    /**
     * @private
     */
    _render(state) {
        throw "GeometryElement:must override it.";
    }
    /**
     * 销毁。
     */
    destroy() {
        if (this._destroyed)
            return;
        this._destroyed = true;
    }
}
/**@private */
GeometryElement._typeCounter = 0;
