# things to layout
# determining the discount based off x var
# initializing model to determine how many people will come based on discount

# can incorporate the popular times API to generate test data
# only missing components are sale per table and profit per table

generate_discount(float per_here, float sale_tab, int num_tab,float avg_marg){
    # per_here = percent here
    # sale_tab = average sale per table
    # avg_marg = the percentage amount profited per table

    # generate optimal revenue
    # avg marg will most likely be a constant found from research
    float cost_per_tab = (1-avg_marg) * sale_tab;

    # start generating potential discounts
    discounts = list();
    dis_sale_tab = dict();
    float baseline = 0;
    # doesn't allow for discounts below margin
    while((1 - baseline)*sale_tab >= cost_per_tab){
        # adds discount
        discounts.append(baseline);
        # adds rev
        dis_sale_tab[baseline] = (1 - baseline)*sale_tab;
        # generate list of possible discounts with increments of 3% (can modify)
        baseline += 0.03;
    }
    int num_dis = len(discounts);
    # determine result of discounts
    # discounts and the resulting sale per table
    # need to get a list of the increase in rev which uses other model
    
    # get the top 5 
    inc_cust_dis = dict();
    inc_rev_dis = dict();
    for i in range(num_dis):
        float d = discounts(i);
        float new_customer = floor(new_costumer_by_discount(d));
        inc_cust_dis[d] = new_customer;
        inc_rev_dis[d] = new_customer * dis_sale_tab[d];
  
# inc_cust_dis = number of new customers by discount
# inc_rev_dis = increase in total rev by discount
# dis_sale_tab = sale made at a table with discount

#  find the top increases in revenue by discount
#  remember to account for an increase in people that might exceed capacity

}

float new_costumer_by_discount(float discount){
    # require table of price range and the amount of people that pay that
    # price      amount of people
    #  $5               x
    #  $7               y
    #  $9 ....         ....
    # this can be a constant for purpose of our calculation
    # let there exist some dictionary with constants called
    price_to_people = dict();
    float sum = 0;
    # add the number of people gained from a discount
    # most should be positive
    # this adds all discounts, if they are closer to the avg sale per table
    # they are counted twice to pull more towards that direction
    int count = 0;
    for x in price_to_people:
        int people_with_dis = price_to_people.get(x * discount)
        int people_without_dis = price_to_people(x)
        if(people_without_dis < people_with_dis):
            int factor = 1;
            if(abs(people_with_dis - sale_tab) <= 15):
                factor = 2;
            sum += factor * (people_with_dis - people_without_dis);
            count += factor;

    return sum / count;
}