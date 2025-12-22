import { describe, expect, test } from "vitest";
import { MyAwesomeApp } from "./MyAwesomeApp";
import { render, screen } from '@testing-library/react';
//Inici el proceso de pruebas unitarias para el componente MyAwesomeApp
describe("MyAwesomeApp Component", () => {

    test("Should render firstName and lastName", () => {
        //Arrange
        const { container } = render(<MyAwesomeApp />);
        // screen.debug();
        const h2 = container.querySelector('h2');
        // expect(1).toBe(2);
        expect(h2?.innerHTML).toContain('Quevedo');

        const h1 = container.querySelector('h1');
        expect(h1?.innerHTML).toContain('Jose');


        // console.log(container.innerHTML);
        // console.log(document.body);
        screen.debug();
        // expect(1).toBe(2);
    });

    test("Should render firstName and lastName - Screen", () => {
        //Arrange
        render(<MyAwesomeApp />);
        screen.debug();
        // const h1 = screen.getByRole('heading', { level: 1 });
        const h1 = screen.getByTestId('firstName');
        expect(h1.innerHTML).toContain('Jose');
        console.log(h1.innerHTML)

    });

    test("Should match snapshot", () => {
        const { container } = render(<MyAwesomeApp />);
        expect(container).toMatchSnapshot();
    });
});




