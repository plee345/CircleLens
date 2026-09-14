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
} from "~/components/ui/table"


export default function DailyRotation() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Navbar />
      <div className="mx-4 md:mx-50 rounded-xl overflow-hidden">
        <Table className="bg-primary">

          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Player</TableHead>
              <TableHead>Performance Points</TableHead>
              <TableHead>xPerformancePoints</TableHead>
              <TableHead className="">xRank</TableHead>
              <TableHead>Accuracy</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <Footer />
    </div>
  );
}
