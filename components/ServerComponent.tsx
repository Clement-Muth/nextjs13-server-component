const ServerComponent = async () => {
  const weather = await (
    await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=48.58363&lon=7.749753&appid=${process.env.API_KEY}`,
      {
        cache: "no-store"
      }
    )
  ).json();

  return (
    <div className="text-center">
      <h1 className="text-4xl">Hello Clément</h1>
      <h2 className="text-2xl">
        Il fait {Math.round(Number(weather.main.feels_like) - 273)}°C à {weather.name}
      </h2>
    </div>
  );
};

export default ServerComponent;