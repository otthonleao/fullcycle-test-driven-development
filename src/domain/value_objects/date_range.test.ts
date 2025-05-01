import { DateRange } from './date_range';

describe('dateRange value object', () => {
  it('deve criar uma instância de DateRange com a data de início e data de término', () => {
    const startDate = new Date('2023-01-01');
    const endDate = new Date('2023-01-02');
    const dateRange = new DateRange(startDate, endDate);

    expect(dateRange).toBeInstanceOf(DateRange);
    expect(dateRange.getStartDate()).toEqual(startDate);
    expect(dateRange.getEndDate()).toEqual(endDate);
  });

  it('deve lançar um erro se a data inicial for maior que a data final', () => {
    expect(() => {
      new DateRange(new Date('2023-01-02'), new Date('2023-01-01'));
    }).toThrow('Data inicial não pode ser posterior à data de início');
  });

  it('deve calcular o total de noites entre as datas corretamente', () => {
    const startDate = new Date('2025-01-01');
    const endDate = new Date('2025-01-05');
    const dateRange = new DateRange(startDate, endDate);

    const totalNights = dateRange.getTotalNights();
    expect(totalNights).toEqual(4);

    const startDate2 = new Date('2025-01-01');
    const endDate2 = new Date('2025-01-01');
    const dateRange2 = new DateRange(startDate2, endDate2);
    const totalNights2 = dateRange2.getTotalNights();
    expect(totalNights2).toEqual(0);
  });
});
