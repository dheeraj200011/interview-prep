import React from "react";

const Pagination = ({ products, pages, setPages, maxVisiblePages = 5 }) => {
  const totalPages = Math.ceil(products.length / 10);

  const selectPageHandler = (index) => {
    if (index >= 1 && index <= totalPages && index !== pages) {
      setPages(index);
    }
  };

  const getVisiblePages = () => {
    // start page decide kar rahe hain
    // current page ke left me half visible pages dikhane ke liye
    // lekin 1 se chhota nahi hona chahiye
    let start = Math.max(1, pages - Math.floor(maxVisiblePages / 2));

    // end page decide kar rahe hain
    // start + maxVisiblePages - 1 tak show karenge
    // lekin totalPages se zyada nahi hona chahiye
    let end = Math.min(totalPages, start + maxVisiblePages - 1);

    // agar visible pages ki count maxVisiblePages se kam ho gayi
    // (mostly last pages ke case me hota hai)
    // to start ko peeche shift kar dete hain
    if (end - start + 1 < maxVisiblePages) {
      start = Math.max(1, end - maxVisiblePages + 1);
    }

    // final visible page numbers store karne ke liye array
    let visible = [];

    // agar start 1 se bada hai
    // to first page (1) show karna padega
    if (start > 1) {
      visible.push(1);

      // agar gap 1 se zyada hai
      // to beech me "..." show karenge
      if (start > 2) visible.push("...");
    }

    // start se end tak ke page numbers add kar rahe hain
    for (let i = start; i <= end; i++) {
      visible.push(i);
    }

    // agar end last page nahi hai
    // to last page bhi show karna padega
    if (end < totalPages) {
      // agar gap zyada hai to "..." add karenge
      if (end < totalPages - 1) visible.push("...");

      // last page add
      visible.push(totalPages);
    }

    // final visible pagination array return
    return visible;
  };

  return (
    <div className="pagination">
      {/* Prev */}
      <span
        className={pages === 1 ? "pagination__disabled" : ""}
        onClick={() => pages > 1 && selectPageHandler(pages - 1)}
      >
        Prev
      </span>

      {/* Page numbers */}
      {getVisiblePages().map((item, index) =>
        item === "..." ? (
          <span key={index}>...</span>
        ) : (
          <span
            key={index}
            className={pages === item ? "pagination__selected" : ""}
            onClick={() => selectPageHandler(item)}
          >
            {item}
          </span>
        ),
      )}

      {/* Next */}
      <span
        className={pages === totalPages ? "pagination__disabled" : ""}
        onClick={() => pages < totalPages && selectPageHandler(pages + 1)}
      >
        Next
      </span>
    </div>
  );
};

export default Pagination;
