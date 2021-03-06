namespace paper.editor {
    export class yRot extends BaseGeo {
        constructor() {
            super();
        }
        onSet() {
            let yRotate = this._createAxis(new egret3d.Vector4(0.0, 0.8, 0.0, 0.5), 1);
            yRotate.name = "GizmoController_Rotate_Y";
            yRotate.tag = "Editor";
            yRotate.transform.setLocalScale(3, 0.05, 3);
            yRotate.transform.setLocalEulerAngles(0, 0, 0);
            this.geo = yRotate
        }
        wasPressed_local() {

        }
        isPressed_local() {

        }
        wasPressed_world() {

        }
        isPressed_world() {

        }
        wasReleased() { return }

    }
}