import { Card, CardContent, CardFooter } from '@heroui/react';
import { Star } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const Instructor = ({ instructor }) => {

    // console.log(instructor);
    const { designation, total_courses, rating, name,
image} = instructor;
    

  return (
    <div>
      <Card className="group overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-500">
        {/* IMAGE */}
        <div className=" rounded-2xl overflow-hidden">
          <Image
            src={image}
            alt={name}
            width={400}
            height={400}
            className="w-full h-64 rounded- object-cover group-hover:scale-110 transition-transform duration-700"
          />
        </div>

        <CardContent className="p-3 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              {designation}
            </span>

            <div className="flex items-center gap-1 text-yellow-500">
              <Star size={16} fill="currentColor" />
              <span className="text-sm font-medium text-foreground">
                {rating}
              </span>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors">
              {name}
            </h3>

            <p className="text-sm text-muted-foreground line-clamp-2">
              Total Courses : <span className='text-primary font-black'>{total_courses}</span>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Instructor;