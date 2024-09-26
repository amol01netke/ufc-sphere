const FormatTime = (time) => {
  const formattedTime = time.toLocaleTimeString("en-US", {
    hour12: true,
  });

  //   console.log(formattedTime);
  //   console.log(formattedTime.length);

  return formattedTime.length <= 10
    ? `${formattedTime.slice(0, 4)} ${formattedTime.slice(7, 10)}`
    : `${formattedTime.slice(0, 5)} ${formattedTime.slice(8, 11)}`;
};

export default FormatTime;
