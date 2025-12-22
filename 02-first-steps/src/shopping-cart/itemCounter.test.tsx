import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";

describe("ItemCounter Component", () => {
    test("should render wirh default values", () => {
        const name = "Product A";
        const quantity = 1;
        render(<ItemCounter name={name} quantity={quantity} />)
        screen.debug();
        expect(screen.getByText(name)).toBeDefined(); // Verifica que el nombre del producto se renderice

        expect(screen.getByText(quantity)).toBeDefined(); // 
    })

    test("should render with custom quantity", () => {
        const name = "Product A";
        const quantity = 5;

        render(<ItemCounter name={name} quantity={quantity} />)

        expect(screen.getByText(quantity)).toBeDefined();

    })

    test("should increse count when +1 button is pressed", () => {

        render(<ItemCounter name="Product A" quantity={1} />)
        const [buttonAdd, buttonSubstract] = screen.getAllByRole("button");
        // console.log(buttonAdd.innerHTML);
        // console.log(buttonSubstract.innerHTML);
        fireEvent.click(buttonAdd);
        expect(screen.getByText("2")).toBeDefined();

    });

    test("should decrease count when -1 button is pressed", () => {
        render(<ItemCounter name="Product A" quantity={5} />)
        const [, buttonSubstract] = screen.getAllByRole("button");
        //console.log(buttonSubstract.innerHTML);
        fireEvent.click(buttonSubstract);
        expect(screen.getByText("4")).toBeDefined();
    });

    test("should decrease count when -1 button is pressed", () => {
        //  quantity = 5
        render(<ItemCounter name="Product A" quantity={5} />)
        const [, buttonSubstract] = screen.getAllByRole("button");
        console.log(buttonSubstract.innerHTML);
        fireEvent.click(buttonSubstract);
        expect(screen.getByText("4")).toBeDefined;
    })

    test("should not decrease count when -1 button is pressed and quantity is 1", () => {
        //  quantity = 1
        render(<ItemCounter name="Product A" quantity={1} />)
        const [, buttonSubstract] = screen.getAllByRole("button");
        console.log(buttonSubstract.innerHTML);
        fireEvent.click(buttonSubstract);
        expect(screen.getByText("1")).toBeDefined;

    })
})

test("should change to red when counter is 1", () => {
    //  quantity = 1
    const name = "Pro Controller";
    const quantity = 1;
    render(<ItemCounter name={name} quantity={quantity} />)
    const itemText = screen.getByText(name);
    expect(itemText.style.color).toBe('red');

})


test("should change to black when counter is great than 1", () => {
    //  quantity = 1
    const name = "Pro Controller";
    const quantity = 7;
    render(<ItemCounter name={name} quantity={quantity} />)
    const itemText = screen.getByText(name);
    expect(itemText.style.color).toBe('black');

})

