let 철수쌤: { subject: string } = { subject: "math" };
let 영희쌤: { subject: string[] } = { subject: ["science", "english"] };
let 민수쌤: { subject: string[] } = { subject: ["science", "art", "korean"] };

function fc(x: { subject: string | string[] }): string {
  if (typeof x.subject === "string") {
    return x.subject;
  } else if (Array.isArray(x.subject)) {
    return x.subject[x.subject.length - 1];
  }

  return "";
}

fc(철수쌤);
