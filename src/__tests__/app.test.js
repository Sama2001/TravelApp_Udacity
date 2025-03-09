import { fetchWeather, fetchImage } from '../../src/client/js/api';

// Mock fetch globally
global.fetch = jest.fn();

describe('Client-Side Functions', () => {
  beforeEach(() => {
    // Reset all mocks before each test
    jest.clearAllMocks();
  });

  it('fetchWeather should return weather data', async () => {
    // Mock the fetch response for weather data
    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ temp: 15, weather: { description: 'Sunny' } }),
    });

    const weather = await fetchWeather(48.8566, 2.3522, 7); // Test with lat, lng, days
    expect(weather).toEqual({ temp: 15, weather: { description: 'Sunny' } });
    expect(fetch).toHaveBeenCalledWith('http://localhost:3001/weather?lat=48.8566&lng=2.3522&days=7'); // Ensure fetch was called with the correct URL
  });

  it('fetchImage should return an image URL', async () => {
    // Mock the fetch response for image data
    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ webformatURL: 'http://example.com/image.jpg' }),
    });

    const image = await fetchImage('Paris');
    expect(image).toBe('http://example.com/image.jpg'); // Check the mocked response
    expect(fetch).toHaveBeenCalledWith('http://localhost:3001/image?location=Paris'); // Ensure fetch was called with the correct URL
  });
});