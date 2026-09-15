import type { Route } from "./+types/dailyrotation";
import Navbar from "~/components/navbar";
import Footer from "~/components/footer";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "~/components/ui/pagination";

const playerTableData = [
  {
    player: "plee",
    rank: "874",
    pp: "14,107",
    acc: "98.71",
    xPP: "15,0000",
    xRank: "600",
    xStarRating: "9.00",
  },

  {
    player: "plee",
    rank: "874",
    pp: "14,107",
    acc: "98.71",
    xPP: "15,0000",
    xRank: "600",
    xStarRating: "9.00",
  },

  {
    player: "plee",
    rank: "874",
    pp: "14,107",
    acc: "98.71",
    xPP: "15,0000",
    xRank: "600",
    xStarRating: "9.00",
  },
];

export default function DailyRotation() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Navbar />
      <div className="mx-4 rounded-sm bg-secondary md:mx-50">
        <Table className="border-separate border-spacing-x-0 border-spacing-y-1">
          {/*<TableCaption>A list of your recent invoices.</TableCaption>*/}
          <TableHeader>
            <TableRow className="[&>th]:font-bold">
              <TableHead>Rank</TableHead>
              <TableHead>Player</TableHead>
              <TableHead>Performance Points</TableHead>
              <TableHead>Accuracy</TableHead>
              <TableHead>xPerformancePoints</TableHead>
              <TableHead>xRank</TableHead>
              <TableHead>xStarRating</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-primary">
            {playerTableData.map((data) => (
              <TableRow
                key={data.player}
                className="overflow-hidden border-0 [&>td:first-child]:rounded-l-md [&>td:last-child]:rounded-r-md"
              >
                <TableCell>#{data.rank}</TableCell>
                <TableCell>{data.player}</TableCell>
                <TableCell>{data.pp}pp</TableCell>
                <TableCell>{data.acc}%</TableCell>
                <TableCell>{data.xPP}</TableCell>
                <TableCell>{data.xRank}</TableCell>
                <TableCell>{data.xStarRating}*</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <Pagination className="p-4">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      <Footer />
    </div>
  );
}
