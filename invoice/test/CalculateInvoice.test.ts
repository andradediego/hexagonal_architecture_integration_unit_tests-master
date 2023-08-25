import CalculateInvoice from "../src/CalculateInvoice";

test("must calc the invoice", async function() {
    const calculateInvoice = new CalculateInvoice();
    const total = await calculateInvoice.execute("1234");
    expect(total).toBe(1050);
});