import authors from "@/app/data.json";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import AuthorCard from "./author-card";

export default function Home() {
  return (
    <div className="container py-12">
      <div className="row g-4">
        <Table>
          <TableCaption>List of Authors from Uplabs.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">
                Name (total theme submit)
              </TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Social</TableHead>
              <TableHead className="text-center">Details</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {authors.map((author) => {
              return (
                // @ts-ignore
                <AuthorCard key={author.userName} {...author} />
              );
            })}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">{authors.length}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
}
