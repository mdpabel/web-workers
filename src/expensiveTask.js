export function expensive() {
  console.log("Task starting");
  let i = 0;
  for (i = 0; i < 2000000000; i++) {}
  return "Finished " + i;
}
