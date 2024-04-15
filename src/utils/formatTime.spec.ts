import { formatTime } from "./formatTime";

describe("formatTime", () => {
  it("should format milliseconds to 'HH:MM:SS' format", () => {
    expect(formatTime(0)).toBe("00:00");
    expect(formatTime(1000)).toBe("00:01");
    expect(formatTime(60000)).toBe("01:00");
    expect(formatTime(3600000)).toBe("1:00:00");
    expect(formatTime(3661000)).toBe("1:01:01");
  });
});
