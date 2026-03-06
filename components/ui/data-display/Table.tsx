import { cn } from '@/lib/utils'

/**
 * Table Components
 *
 * Data table with header, body, and rows.
 *
 * @example
 * <Table>
 *   <TableHeader>
 *     <TableRow>
 *       <TableHead>Name</TableHead>
 *       <TableHead>Status</TableHead>
 *     </TableRow>
 *   </TableHeader>
 *   <TableBody>
 *     <TableRow>
 *       <TableCell>Item 1</TableCell>
 *       <TableCell><Badge>Active</Badge></TableCell>
 *     </TableRow>
 *   </TableBody>
 * </Table>
 */

export interface TableContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

export function TableContainer({ className, children, ...props }: TableContainerProps) {
  return (
    <div
      className={cn(
        'overflow-x-auto border border-neutral-200 rounded-lg',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {}

export function Table({ className, children, ...props }: TableProps) {
  return (
    <table
      className={cn('w-full border-collapse', className)}
      {...props}
    >
      {children}
    </table>
  )
}

export interface TableHeaderProps extends React.HTMLAttributes<HTMLTableSectionElement> {}

export function TableHeader({ className, children, ...props }: TableHeaderProps) {
  return (
    <thead className={className} {...props}>
      {children}
    </thead>
  )
}

export interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {}

export function TableBody({ className, children, ...props }: TableBodyProps) {
  return (
    <tbody className={className} {...props}>
      {children}
    </tbody>
  )
}

export interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {}

export function TableRow({ className, children, ...props }: TableRowProps) {
  return (
    <tr
      className={cn(
        'border-b border-neutral-100 last:border-b-0',
        'hover:bg-neutral-50 transition-colors',
        className
      )}
      {...props}
    >
      {children}
    </tr>
  )
}

export interface TableHeadProps extends React.ThHTMLAttributes<HTMLTableCellElement> {}

export function TableHead({ className, children, ...props }: TableHeadProps) {
  return (
    <th
      className={cn(
        'px-4 py-3 text-left',
        'text-xs font-semibold text-neutral-500 uppercase tracking-wide',
        'bg-neutral-50 border-b border-neutral-200',
        className
      )}
      {...props}
    >
      {children}
    </th>
  )
}

export interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {}

export function TableCell({ className, children, ...props }: TableCellProps) {
  return (
    <td
      className={cn(
        'px-4 py-4 text-sm text-neutral-700',
        className
      )}
      {...props}
    >
      {children}
    </td>
  )
}

export default Table
