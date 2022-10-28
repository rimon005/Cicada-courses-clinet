import React from 'react';
import { Link } from 'react-router-dom';
import './CourseSummaryCard.css'

const CourseSummaryCard = ({ course }) => {
    const { title, details, thumbnail_url, _id } = course;
    return (
        <div className="card w-96 bg-base-100 shadow-xl summary-card">
            <figure className="px-10 pt-10">
                <img src={thumbnail_url} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body items-center">
                <h2 className="card-title">{title}</h2>
                <p>{
                    details.length > 150 ?
                        <>{details.slice(0, 150) + '...'} <Link to={`/courses/${_id}`}>Read more</Link></>
                        :
                        <>{details}</>
                }
                </p>
                <div className="card-actions">
                    <button className=" btn-outline btn-warning details-btn"><Link to={`/courses/${_id}`}>Details</Link></button>
                </div>
            </div>
        </div>
    );
};

export default CourseSummaryCard;