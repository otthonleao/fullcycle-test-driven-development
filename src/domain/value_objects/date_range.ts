export class DateRange {
  private readonly startDate: Date;
  private readonly endDate: Date;

  constructor(startDate: Date, endDate: Date) {
    if (startDate > endDate) {
      throw new Error('Data inicial não pode ser posterior à data de início');
    }
    this.startDate = startDate;
    this.endDate = endDate;
  }

  getStartDate(): Date {
    return this.startDate;
  }

  getEndDate(): Date {
    return this.endDate;
  }

  getTotalNights(): number {
    const diffTime = this.endDate.getTime() - this.startDate.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  }
}
