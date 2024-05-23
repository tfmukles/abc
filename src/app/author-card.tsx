import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { TableCell, TableRow } from "@/components/ui/table";
import Image from "next/image";
import path from "path";
import { icons } from "./icons";
import { Author } from "./type";

export default function AuthorCard(author: Author) {
  const {
    fullName,
    userName,
    created,
    description,
    phoneNumber,
    email,
    image,
    ...social
  } = author;

  const socialIcons = Object.entries(social);
  const profilePicture = path.basename(image);

  return (
    <TableRow key={author.userName}>
      <TableCell width={250} className="font-medium">
        <div className="flex items-center space-x-2">
          <Avatar>
            <AvatarImage src={`/authors/profile/${profilePicture}`} />
            <AvatarFallback>{fullName.slice(0, 2)}</AvatarFallback>
          </Avatar>
          <p>
            {fullName} <b>({created})</b>
          </p>
        </div>
      </TableCell>
      <TableCell>
        <p className="font-medium">{description}</p>
      </TableCell>
      <TableCell>
        <ul className="flex gap-2">
          {socialIcons.map(([key, value]) => {
            let href = value;
            switch (key) {
              case "email":
                href = `mailto:${value}`;
                break;
              case "phone":
                href = `tel:${value}`;
                break;
              default:
                break;
            }

            return (
              <li key={key}>
                <a title={key} href={href}>
                  {/* @ts-ignore */}
                  {icons[key]}
                </a>
              </li>
            );
          })}
        </ul>
      </TableCell>
      <TableCell className="text-right">
        <Dialog>
          <DialogTrigger asChild>
            <Button>see more</Button>
          </DialogTrigger>
          <DialogContent className="h-screen">
            <Image
              src={"/" + image}
              alt={fullName}
              fill
              className="rounded-lg object-cover"
            />
          </DialogContent>
        </Dialog>
      </TableCell>
    </TableRow>
  );
}
