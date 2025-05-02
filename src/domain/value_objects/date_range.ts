export class DateRange {
  private readonly startDate: Date;
  private readonly endDate: Date;

  constructor(startDate: Date, endDate: Date) {
    this.isValidDates(startDate, endDate);
    this.startDate = startDate;
    this.endDate = endDate;
  }

  private isValidDates(startDate: Date, endDate: Date): void {
    if (startDate == endDate) {
      throw new Error('Data de início não pode ser igual à data de término');
    }

    if (endDate < startDate) {
      throw new Error('Data inicial não pode ser posterior à data de início');
    }
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

  overlaps(other: DateRange): boolean {
    return (
      this.startDate < other.endDate && other.getStartDate() < this.endDate
    );
  }
}
