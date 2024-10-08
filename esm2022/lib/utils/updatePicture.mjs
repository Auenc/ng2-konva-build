// adapted FROM: https://github.com/lavrton/react-konva/blob/master/src/react-konva-fiber.js
export default function updatePicture(node) {
    const drawingNode = node.getLayer() || node.getStage();
    if (drawingNode) {
        drawingNode.batchDraw();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlUGljdHVyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nMi1rb252YS9zcmMvbGliL3V0aWxzL3VwZGF0ZVBpY3R1cmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEZBQTRGO0FBSzVGLE1BQU0sQ0FBQyxPQUFPLFVBQVUsYUFBYSxDQUFDLElBQVU7SUFDOUMsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN2RCxJQUFJLFdBQVcsRUFBRSxDQUFDO1FBQ2hCLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMxQixDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFkYXB0ZWQgRlJPTTogaHR0cHM6Ly9naXRodWIuY29tL2xhdnJ0b24vcmVhY3Qta29udmEvYmxvYi9tYXN0ZXIvc3JjL3JlYWN0LWtvbnZhLWZpYmVyLmpzXG5cbmltcG9ydCBLb252YSBmcm9tICdrb252YSc7XG5pbXBvcnQgTm9kZSA9IEtvbnZhLk5vZGU7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZVBpY3R1cmUobm9kZTogTm9kZSkge1xuICBjb25zdCBkcmF3aW5nTm9kZSA9IG5vZGUuZ2V0TGF5ZXIoKSB8fCBub2RlLmdldFN0YWdlKCk7XG4gIGlmIChkcmF3aW5nTm9kZSkge1xuICAgIGRyYXdpbmdOb2RlLmJhdGNoRHJhdygpO1xuICB9XG59XG4iXX0=