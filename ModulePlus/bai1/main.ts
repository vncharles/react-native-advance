import { Triangle } from './triangle';

function main() {
    const triangles: Triangle[] = [
        new Triangle(3, 4, 5),
        new Triangle(1, 1, 2), // Vi phạm ràng buộc
        new Triangle(5, 5, 5),
        new Triangle(4, 4, 6),
        new Triangle(3, 4, 4)
    ];

    // Xuất thông tin các hình tam giác
    console.log("Thông tin hình tam giác:");

    triangles.forEach((triangle, index) => {
        const info = `Tam giác ${index + 1}: Cạnh A = ${triangle.sideA.toFixed(2)}, Cạnh B = ${triangle.sideB.toFixed(2)}, Cạnh C = ${triangle.sideC.toFixed(2)}, Kiểu = ${triangle.getTriangleType()}, Chu vi = ${triangle.calculatePerimeter().toFixed(2)}, Diện tích = ${triangle.calculateArea().toFixed(2)}`;
        console.log(info);
    });
}

main();
