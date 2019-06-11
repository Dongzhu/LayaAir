import { BaseTexture } from "laya/resource/BaseTexture";
import { Vector4 } from "../../math/Vector4";
import { ShaderDefines } from "../../shader/ShaderDefines";
import { BaseMaterial } from "./BaseMaterial";
/**
 * ...
 * @author
 */
export declare class WaterPrimaryMaterial extends BaseMaterial {
    static HORIZONCOLOR: number;
    static MAINTEXTURE: number;
    static NORMALTEXTURE: number;
    static WAVESCALE: number;
    static WAVESPEED: number;
    static SHADERDEFINE_MAINTEXTURE: number;
    static SHADERDEFINE_NORMALTEXTURE: number;
    /** 默认材质，禁止修改*/
    static defaultMaterial: WaterPrimaryMaterial;
    /**@private */
    static shaderDefines: ShaderDefines;
    /**
     * @private
     */
    static __initDefine__(): void;
    /**
     * 获取地平线颜色。
     * @return 地平线颜色。
     */
    /**
    * 设置地平线颜色。
    * @param value 地平线颜色。
    */
    horizonColor: Vector4;
    /**
     * 获取主贴图。
     * @return 主贴图。
     */
    /**
    * 设置主贴图。
    * @param value 主贴图。
    */
    mainTexture: BaseTexture;
    /**
     * 获取法线贴图。
     * @return 法线贴图。
     */
    /**
    * 设置法线贴图。
    * @param value 法线贴图。
    */
    normalTexture: BaseTexture;
    /**
     * 获取波动缩放系数。
     * @return 波动缩放系数。
     */
    /**
    * 设置波动缩放系数。
    * @param value 波动缩放系数。
    */
    waveScale: number;
    /**
     * 获取波动速率。
     * @return 波动速率。
     */
    /**
    * 设置波动速率。
    * @param value 波动速率。
    */
    waveSpeed: Vector4;
    constructor();
    /**
 * 克隆。
 * @return	 克隆副本。
 */
    clone(): any;
}
