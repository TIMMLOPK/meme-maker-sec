import { Text } from "@nextui-org/react";

export default function Footer() {
  let time = new Date();
  let year = time.getFullYear();
  return (
    <div className="footer">
      <Text>All rights reserved {year}</Text>
    </div>
  );
}
