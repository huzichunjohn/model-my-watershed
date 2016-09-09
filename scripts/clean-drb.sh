#!/bin/bash

sed -Ei .bak -e 's/1TWP/ TWP/g' \
            -e 's/TWP/TOWNSHIP/g' \
            -e 's/([A-Z])(BORO)/\1 \2/g' \
            -e 's/BORO/BOROUGH/g' \
            -e 's/([A-Z])(CITY)/\1/g' \
            ./ms_pointsource_drb.sql.txt
