let goingUp = false;
export function jump(mesh) {
    const jumpHeight = 2;
    const totalFrames = 30;
    let frame = 0;

    if (goingUp) return null ;
    goingUp = true;
    const startY = mesh.position.y;
    const scene = mesh.getScene();

    const jumpObserver = scene.onBeforeRenderObservable.add(() => {
       
        if (goingUp) {
            mesh.position.y += jumpHeight / totalFrames;
        } else {
            mesh.position.y -= jumpHeight / totalFrames;
        }

        frame++;

        if (frame === totalFrames) {
            if (goingUp) {
                goingUp = false;
                frame = 0;
            } else {
                scene.onBeforeRenderObservable.remove(jumpObserver);
                mesh.position.y = startY; // Reset exact position
            }
        }
    });
}
 